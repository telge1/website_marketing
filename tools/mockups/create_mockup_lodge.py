from PIL import Image, ImageDraw, ImageFont, ImageFilter
import pandas as pd
import os
import random

# Simple, web-like mockup generator:
# - top navigation bar with brand and menu
# - hero area with lodge name, address, phone and CTAs
# - pricing teaser strip

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BACKGROUND_IMG = os.path.join(BASE_DIR, "background.jpg")
FONT_MAIN = os.path.join(BASE_DIR, "DejaVuSans-Bold.ttf")
FONT_SUB = os.path.join(BASE_DIR, "DejaVuSans.ttf")
OUT_DIR = os.path.join(BASE_DIR, "output_previews")
CSV_PATH = os.path.join(BASE_DIR, "lodges.csv")
# etwas höhere Leinwand, damit Promo-Text bequem passt (WhatsApp-Format)
CANVAS_FALLBACK = (1280, 860)

os.makedirs(OUT_DIR, exist_ok=True)

lodges = pd.read_csv(CSV_PATH)

# Helpers
def load_fonts():
    try:
        return (
            ImageFont.truetype(FONT_MAIN, 44),   # h1 (smaller for WhatsApp previews)
            ImageFont.truetype(FONT_SUB, 28),    # body
            ImageFont.truetype(FONT_SUB, 22),    # small
            ImageFont.truetype(FONT_MAIN, 24),   # nav
            ImageFont.truetype(FONT_MAIN, 32),   # button
        )
    except Exception:
        f = ImageFont.load_default()
        return (f, f, f, f, f)

def rounded(draw: ImageDraw.ImageDraw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)

def text_size(draw: ImageDraw.ImageDraw, text: str, font):
    # draw.textbbox returns (x0,y0,x1,y1) -> width/height are deltas
    x0, y0, x1, y1 = draw.textbbox((0,0), text, font=font)
    return (x1 - x0, y1 - y0)

def wrap_text(draw: ImageDraw.ImageDraw, text: str, font, max_width: int):
    words = str(text).split()
    if not words:
        return [""]
    lines, line = [], ""
    for w in words:
        trial = (line + " " + w).strip()
        tw, _ = text_size(draw, trial, font)
        if tw <= max_width or not line:
            line = trial
        else:
            lines.append(line)
            line = w
    if line:
        lines.append(line)
    return lines
def button(img, xy, text, font, bg, fg):
    draw = ImageDraw.Draw(img)
    rounded(draw, xy, radius=14, fill=bg)
    x0, y0, x1, y1 = xy
    tw, th = text_size(draw, text, font)
    tx = x0 + (x1 - x0 - tw) // 2
    ty = y0 + (y1 - y0 - th) // 2
    draw.text((tx, ty), text, font=font, fill=fg)

def with_overlay(img, color=(0,0,0,120)):
    overlay = Image.new("RGBA", img.size, color)
    return Image.alpha_composite(img.convert("RGBA"), overlay)

# Load background or fallback
if os.path.exists(BACKGROUND_IMG):
    base_bg = Image.open(BACKGROUND_IMG).convert("RGB")
    # Höhe etwas vergrößern, indem unten angefügt wird
    W0, H0 = base_bg.size
    EXTRA_H = 300
    canvas = Image.new("RGB", (W0, H0 + EXTRA_H), base_bg.getpixel((0, H0 - 1)))
    canvas.paste(base_bg, (0, 0))
    base_bg = canvas
else:
    base_bg = Image.new("RGB", CANVAS_FALLBACK, (12,24,40))

W, H = base_bg.size
h1, body, small, navf, ctaf = load_fonts()

for _, row in lodges.iterrows():
    name = str(row["name"])
    address = str(row["address"])
    phone = str(row["phone"])

    # Start with a slightly blurred background and dark overlay
    bg = base_bg.copy().filter(ImageFilter.GaussianBlur(1.2))
    img = with_overlay(bg, (8,12,24,150)).convert("RGB")
    draw = ImageDraw.Draw(img)

    # Theme colors (dark UI + brand blue)
    brand = (59,130,246)      # #3b82f6
    brand_dark = (37,99,235)  # #2563eb
    surface = (16,26,45)
    surface_alt = (18,30,52)
    text = (241,245,249)      # very light
    muted = (156,163,175)
    border = (34,48,67)
    success = (37,211,102)    # WhatsApp green
    gold = (250,204,21)       # star gold
    flag_green = (16,185,129)
    flag_blue = (37,99,235)
    flag_yellow = (234,179,8)
    flag_black = (12,12,12)

    # Top navigation bar
    rounded(draw, [0,0,W,72], radius=0, fill=(12,20,36))
    # brand: lodge name
    draw.text((24, 22), name, font=navf, fill=text)
    # menu (right aligned) – English
    items = ["Home", "Rooms & Rates", "Gallery", "Offers", "Location & Contact"]
    x = W - 24
    for item in reversed(items):
        tw, th = text_size(draw, item, navf)
        x -= tw
        draw.text((x, 22), item, font=navf, fill=muted)
        x -= 28

    # Hero (dynamische Höhe)
    hero_x, hero_y = 64, 120
    hero_w = W - 128
    pad = 24
    max_text_w = hero_w - pad*2

    title_text = f"{name}"
    subtitle_text = "Your quiet and safe place in Tanzania."
    trust_text = "🛏️ Family‑friendly · 🕊️ Peace & comfort guaranteed"

    draw_tmp = draw
    # wrap title/subtitle to 75% width and center later
    max_title_w = int(hero_w * 0.75)
    title_lines = wrap_text(draw_tmp, title_text, h1, max_title_w)
    subtitle_lines = wrap_text(draw_tmp, subtitle_text, body, max_title_w)
    title_h = sum(text_size(draw_tmp, ln, h1)[1] for ln in title_lines) + (len(title_lines)-1)*6
    subtitle_h = sum(text_size(draw_tmp, ln, body)[1] for ln in subtitle_lines) + (len(subtitle_lines)-1)*4
    addr_h = text_size(draw_tmp, address, body)[1]
    phone_h = text_size(draw_tmp, f"☎ {phone}", body)[1]
    trust_lines = wrap_text(draw_tmp, trust_text, small, max_text_w)
    trust_h = sum(text_size(draw_tmp, ln, small)[1] for ln in trust_lines) + (len(trust_lines)-1)*4

    cta1 = "Book now"
    cta2 = "WhatsApp Chat"
    btn_gap = 16
    btn_h = 48
    cta1_w = max(220, text_size(draw_tmp, cta1, ctaf)[0] + 36)
    cta2_w = max(180, text_size(draw_tmp, cta2, ctaf)[0] + 36)
    single_row = (cta1_w + btn_gap + cta2_w) <= max_text_w
    ctas_h = btn_h if single_row else btn_h*2 + btn_gap

    hero_h = pad + title_h + 8 + subtitle_h + 12 + addr_h + 6 + phone_h + 12 + trust_h + 16 + ctas_h + pad
    rounded(draw, [hero_x, hero_y, hero_x+hero_w, hero_y+hero_h], 18, fill=(18,30,52,255), outline=border, width=2)

    cx, cy = hero_x + pad, hero_y + pad
    # centered title
    for ln in title_lines:
        tw, th = text_size(draw, ln, h1)
        tx = hero_x + (hero_w - tw) // 2
        draw.text((tx, cy), ln, font=h1, fill=text)
        cy += th + 6
    cy += 2
    # centered subtitle
    for ln in subtitle_lines:
        tw, th = text_size(draw, ln, body)
        tx = hero_x + (hero_w - tw) // 2
        draw.text((tx, cy), ln, font=body, fill=(216,225,236))
        cy += th + 4
    cy += 6
    draw.text((cx, cy), address, font=body, fill=muted); cy += addr_h + 6
    draw.text((cx, cy), f"☎ {phone}", font=body, fill=muted); cy += phone_h + 12
    # Trust items with vector bullets (avoid emoji font issues)
    trust_items = ["Family-friendly", "Peace & comfort guaranteed"]
    bullet_r = 4
    line_h = text_size(draw, "Ag", small)[1]
    # draw first row of items (left aligned)
    tx = cx
    for i, item in enumerate(trust_items):
        # bullet
        bx = tx
        by = cy + line_h // 2
        draw.ellipse([bx, by - bullet_r, bx + bullet_r*2, by + bullet_r], fill=brand)
        tx += bullet_r*2 + 6
        # text
        draw.text((tx, cy), item, font=small, fill=(203,213,225))
        tw, th = text_size(draw, item, small)
        tx += tw + 24
    cy += line_h + 8
    if single_row:
        total_w = cta1_w + btn_gap + cta2_w
        sx = hero_x + (hero_w - total_w) // 2
        button(img, (sx, cy, sx + cta1_w, cy + btn_h), cta1, ctaf, brand, (255,255,255))
        button(img, (sx + cta1_w + btn_gap, cy, sx + cta1_w + btn_gap + cta2_w, cy + btn_h), cta2, ctaf, success, (255,255,255))
        cy += btn_h
    else:
        sx1 = hero_x + (hero_w - cta1_w) // 2
        button(img, (sx1, cy, sx1 + cta1_w, cy + btn_h), cta1, ctaf, brand, (255,255,255)); cy += btn_h + btn_gap
        sx2 = hero_x + (hero_w - cta2_w) // 2
        button(img, (sx2, cy, sx2 + cta2_w, cy + btn_h), cta2, ctaf, success, (255,255,255)); cy += btn_h

    # Promo-Block (im freien Bereich)
    card_y = hero_y + hero_h + 20
    promo_x, promo_y = 64, card_y
    promo_w = W - 128
    promo_pad = 16
    # Swahili Promo-Text
    promo_head = "Tovuti yako ya biashara kesho"
    promo_body = "Tunakutengenezea business website (jina, mawasiliano, ramani, saa za kazi, picha, kitufe cha WhatsApp + kiungo cha maoni). Kazi ya Msanidi Mjerumani. Bei jumla: 50,000 TSh."
    # Größere Schrift im Promo-Block
    promo_head_font = ctaf   # ~32 px
    promo_body_font = body   # ~28 px
    head_lines = wrap_text(draw, promo_head, promo_head_font, promo_w - promo_pad*2)
    body_lines = wrap_text(draw, promo_body, promo_body_font, promo_w - promo_pad*2)
    head_h = sum(text_size(draw, ln, promo_head_font)[1] for ln in head_lines) + (len(head_lines)-1)*4
    body_h = sum(text_size(draw, ln, promo_body_font)[1] for ln in body_lines) + (len(body_lines)-1)*4
    promo_h = promo_pad + head_h + 6 + body_h + promo_pad
    rounded(draw, [promo_x, promo_y, promo_x + promo_w, promo_y + promo_h], 14, fill=surface, outline=border)
    ty = promo_y + promo_pad
    for ln in head_lines:
        draw.text((promo_x + promo_pad, ty), ln, font=promo_head_font, fill=text)
        ty += text_size(draw, ln, promo_head_font)[1] + 4
    ty += 2
    for ln in body_lines:
        draw.text((promo_x + promo_pad, ty), ln, font=promo_body_font, fill=muted)
        ty += text_size(draw, ln, promo_body_font)[1] + 4

    # Pricing teaser strip
    # Testimonials (English)
    testi_x, testi_y = promo_x, promo_y + promo_h + 16
    testi_w = promo_w
    testi_pad = 16
    star1 = "★★★★★"
    quote1 = "Very clean rooms, good breakfast and friendly staff!"
    author1 = "— Anna, Germany"
    star2 = "★★★★★"
    quote2 = "Perfect place near the beach. Fast Wi‑Fi and great staff."
    author2 = "— David, UK"
    # Card 1
    q1_lines = wrap_text(draw, quote1, promo_body_font, testi_w - testi_pad*2)
    a1_w, a1_h = text_size(draw, author1, small)
    s1_w, s1_h = text_size(draw, star1, small)
    q1_h = sum(text_size(draw, ln, promo_body_font)[1] for ln in q1_lines) + (len(q1_lines)-1)*4
    card1_h = testi_pad + s1_h + 6 + q1_h + 6 + a1_h + testi_pad
    rounded(draw, [testi_x, testi_y, testi_x + testi_w, testi_y + card1_h], 14, fill=surface, outline=border)
    ty = testi_y + testi_pad
    draw.text((testi_x + testi_pad, ty), star1, font=small, fill=gold); ty += s1_h + 6
    for ln in q1_lines:
        draw.text((testi_x + testi_pad, ty), ln, font=promo_body_font, fill=text)
        ty += text_size(draw, ln, promo_body_font)[1] + 4
    draw.text((testi_x + testi_pad, ty), author1, font=small, fill=muted)
    # Card 2
    card2_y = testi_y + card1_h + 12
    q2_lines = wrap_text(draw, quote2, promo_body_font, testi_w - testi_pad*2)
    a2_w, a2_h = text_size(draw, author2, small)
    s2_w, s2_h = text_size(draw, star2, small)
    q2_h = sum(text_size(draw, ln, promo_body_font)[1] for ln in q2_lines) + (len(q2_lines)-1)*4
    card2_h = testi_pad + s2_h + 6 + q2_h + 6 + a2_h + testi_pad
    rounded(draw, [testi_x, card2_y, testi_x + testi_w, card2_y + card2_h], 14, fill=surface, outline=border)
    ty = card2_y + testi_pad
    # draw colored stars for second card (gold for filled, muted for empty)
    tx = testi_x + testi_pad
    for ch in star2:
        ch_w, ch_h = text_size(draw, ch, small)
        draw.text((tx, ty), ch, font=small, fill=(gold if ch == "★" else muted))
        tx += ch_w
    ty += s2_h + 6
    for ln in q2_lines:
        draw.text((testi_x + testi_pad, ty), ln, font=promo_body_font, fill=text)
        ty += text_size(draw, ln, promo_body_font)[1] + 4
    draw.text((testi_x + testi_pad, ty), author2, font=small, fill=muted)

    strip_y = card2_y + card2_h + 20
    rounded(draw, [64, strip_y, W-64, strip_y+64], 14, fill=surface_alt, outline=border)
    draw.text((80, strip_y+20), "Best rates · Breakfast included · Free Wi‑Fi",
              font=small, fill=(199,210,254))
    cta_t = "Book on WhatsApp"
    cta_w = max(260, text_size(draw, cta_t, ctaf)[0] + 36)
    button(img, (W-64-cta_w-20, strip_y+10, W-64-20, strip_y+54), cta_t, ctaf, brand_dark, (255,255,255))
    # Tiny footer line
    footer_text = "© 2025 Blue Ocean Lodge • Website design by Msanidi Mjerumani • All rights reserved."
    ft_w, ft_h = text_size(draw, footer_text, small)
    ft_y = strip_y + 64 + 16
    ft_x = (W - ft_w) // 2
    draw.text((ft_x, ft_y), footer_text, font=small, fill=muted)
    # Bottom-right small label
    # Bottom-right label with drawn Tanzanian flag (no emoji)
    br_text = "“Mfano wa tovuti yako”"
    text_w, text_h = text_size(draw, br_text, small)
    flag_w, flag_h = 24, 16
    gap = 6
    total_w = flag_w + gap + text_w
    br_x = W - 16 - total_w
    br_y = H - text_h - 12
    # draw flag
    fx, fy = br_x, br_y + (text_h - flag_h)//2
    draw.rectangle([fx, fy, fx+flag_w, fy+flag_h], fill=flag_green)  # base green
    # blue triangle bottom-right
    draw.polygon([(fx+flag_w, fy), (fx+flag_w, fy+flag_h), (fx, fy+flag_h)], fill=flag_blue)
    # yellow border (thicker) along diagonal
    t = max(2, int(min(flag_w, flag_h)*0.22))
    draw.polygon([(fx, fy+flag_h - (t+2)), (fx+(t+2), fy+flag_h), (fx+flag_w, fy+(t+2)), (fx+flag_w-(t+2), fy)], fill=flag_yellow)
    # black diagonal band
    draw.polygon([(fx, fy+flag_h - t), (fx+t, fy+flag_h), (fx+flag_w, fy+t), (fx+flag_w - t, fy)], fill=flag_black)
    # text next to flag
    draw.text((fx + flag_w + gap, br_y), br_text, font=small, fill=muted)

    # Footer removed for clean mockup

    safe_name = name.replace(" ", "_")
    out_path = os.path.join(OUT_DIR, f"preview_{safe_name}.png")
    img.save(out_path, quality=90)
    print("✅ erstellt:", out_path)

print("Fertig! Alle Previews in", OUT_DIR)

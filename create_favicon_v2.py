#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create a 512x512 image with transparent background
size = 512
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Draw rounded rectangle background (dark green)
dark_green = (5, 31, 32, 255)  # #051f20
corner_radius = 60  # Proportional to 512x512

# Create rounded rectangle
draw.rounded_rectangle([(0, 0), (size, size)], radius=corner_radius, fill=dark_green)

# Light green color for text
light_green = (142, 182, 155, 255)  # #8eb69b

# Try to use a system font, fall back to default
try:
    # Font sizes
    as_font_size = 240
    copy_font_size = 80
    
    font_options = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
        '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
        '/System/Library/Fonts/Helvetica.ttc',
        'Arial Bold',
    ]
    
    as_font = None
    copy_font = None
    
    for font_path in font_options:
        try:
            if os.path.exists(font_path):
                as_font = ImageFont.truetype(font_path, as_font_size)
                copy_font = ImageFont.truetype(font_path, copy_font_size)
                break
        except:
            continue
    
    if as_font is None:
        as_font = ImageFont.load_default()
        copy_font = ImageFont.load_default()
except:
    as_font = ImageFont.load_default()
    copy_font = ImageFont.load_default()

# Draw "AS" text
as_text = "AS"
as_bbox = draw.textbbox((0, 0), as_text, font=as_font)
as_width = as_bbox[2] - as_bbox[0]
as_height = as_bbox[3] - as_bbox[1]

# Draw "COPY" text
copy_text = "COPY"
copy_bbox = draw.textbbox((0, 0), copy_text, font=copy_font)
copy_width = copy_bbox[2] - copy_bbox[0]
copy_height = copy_bbox[3] - copy_bbox[1]

# Calculate total height of both texts with spacing
spacing = 10
total_height = as_height + spacing + copy_height

# Center vertically
start_y = (size - total_height) // 2

# Position "AS" centered horizontally
as_x = (size - as_width) // 2 - as_bbox[0]
as_y = start_y - as_bbox[1]

# Position "COPY" centered horizontally
copy_x = (size - copy_width) // 2 - copy_bbox[0]
copy_y = start_y + as_height + spacing - copy_bbox[1]

# Draw the text
draw.text((as_x, as_y), as_text, fill=light_green, font=as_font)
draw.text((copy_x, copy_y), copy_text, fill=light_green, font=copy_font)

# Save as PNG
output_path = '/mnt/user-data/outputs/ascopy-flat/favicon-v2.png'
img.save(output_path, 'PNG')

# Also create smaller versions
img_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
img_192.save('/mnt/user-data/outputs/ascopy-flat/favicon-v2-192.png', 'PNG')

img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
img_32.save('/mnt/user-data/outputs/ascopy-flat/favicon-v2-32.png', 'PNG')

print("Updated favicons created successfully!")
print("- favicon-v2.png (512x512)")
print("- favicon-v2-192.png (192x192)")
print("- favicon-v2-32.png (32x32)")

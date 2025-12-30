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

# Draw "AS" text in light green
light_green = (142, 182, 155, 255)  # #8eb69b

# Try to use a system font, fall back to default
try:
    # Try different font options
    font_size = 240
    font_options = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
        '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
        '/System/Library/Fonts/Helvetica.ttc',
        'Arial Bold',
    ]
    
    font = None
    for font_path in font_options:
        try:
            if os.path.exists(font_path):
                font = ImageFont.truetype(font_path, font_size)
                break
        except:
            continue
    
    if font is None:
        font = ImageFont.load_default()
        # Scale up default font
        font_size = 100
except:
    font = ImageFont.load_default()
    font_size = 100

# Draw text centered
text = "AS"
# Get text bounding box
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]

# Center the text
x = (size - text_width) // 2 - bbox[0]
y = (size - text_height) // 2 - bbox[1]

draw.text((x, y), text, fill=light_green, font=font)

# Save as PNG
output_path = '/mnt/user-data/outputs/ascopy-flat/favicon.png'
img.save(output_path, 'PNG')

# Also create smaller versions
img_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
img_192.save('/mnt/user-data/outputs/ascopy-flat/favicon-192.png', 'PNG')

img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
img_32.save('/mnt/user-data/outputs/ascopy-flat/favicon-32.png', 'PNG')

print("Favicons created successfully!")
print("- favicon.png (512x512)")
print("- favicon-192.png (192x192)")
print("- favicon-32.png (32x32)")

from PIL import Image
import os

# Path to the folder containing the original images
folder_path = 'assets_work'

# List all files in the folder
files = os.listdir(folder_path)

# Define the size names and their corresponding widths
sizes = {
    'lazy': 100,
    'size-s': 400,
    'size-m': 600,
    'size-l': 800,
    'size-xl': 1400,
    'size-xxl': 2500,
}

# Loop through each file in the folder
for file_name in files:
    # Check if the file is an image (you can add more file extensions if needed)
    if file_name.endswith('.jpg') or file_name.endswith('.jpeg') or file_name.endswith('.png'):
        # Open the image file
        image = Image.open(os.path.join(folder_path, file_name))

        # Create variations for each specified size
        for size_name, width in sizes.items():
            # Calculate the height while preserving the aspect ratio
            original_width, original_height = image.size
            height = int((width / original_width) * original_height)

            # Resize the image
            resized_image = image.resize((width, height), Image.ANTIALIAS)

            # Extract the filename and extension
            name, extension = os.path.splitext(file_name)

            # Construct the output file path
            output_path = os.path.join(folder_path, f'{name}---{size_name}{extension}')

            # Save the resized image
            resized_image.save(output_path)

        # Close the original image
        image.close()

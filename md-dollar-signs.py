import re
import os

def format_equations_in_md(text):
    return re.sub(r'\$\$(.*?)\$\$', r'$$\n\1\n$$', text, flags=re.DOTALL)

def process_md_files_in_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                formatted_content = format_equations_in_md(content)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(formatted_content)

if __name__ == "__main__":
    folder = "./public/content"
    process_md_files_in_directory(folder)

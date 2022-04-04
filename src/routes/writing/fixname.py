import os


def all_files(path: str) -> list:
		"""
		Get all files in a directory.
		"""
		return [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]

def slug(filename: str) -> str:
		"""
		Convert a filename to a slug.
		"""
		return filename.replace(" ", "-").lower()

def extension(filename: str) -> str:
		"""
		Change md to svx
		"""
		ex = filename.split(".")[-1]

		if ex != "md":
				return filename

		return filename.replace(".md", ".svx")

def rename_file(filename: str, path: str) -> None:
		"""
		Rename a file.
		"""
		new_name = extension(slug(filename))
		new_path = os.path.join(path, new_name)

		os.rename(os.path.join(path, filename), new_path)

if __name__ == "__main__":
		for f in all_files("."):
				rename_file(f, ".")

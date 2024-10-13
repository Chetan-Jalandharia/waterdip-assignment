
class Task:
    def __init__(self, title: str, is_completed: bool = False):
        self.title = title
        self.is_completed = is_completed

    def to_dict(self):
        return {
            "title": self.title,
            "is_completed": self.is_completed
        }

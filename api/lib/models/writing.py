from mongoengine import Document, StringField

class Writing(Document):
   
    slug: StringField = StringField()
    markdown: StringField = StringField()
    html: StringField = StringField()

    def to_json(self):
        
        return {
            "slug": self.slug,
            "markdown": self.markdown,
            "html": self.html,
        }

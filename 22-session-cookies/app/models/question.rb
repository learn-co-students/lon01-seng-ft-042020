class Question < ApplicationRecord
    has_many :answers
    belongs_to :correct_answer, class_name: "Answer"

    def random_answers
        self.answers.order("RANDOM()")
    end
end

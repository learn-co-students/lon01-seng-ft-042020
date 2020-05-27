class QuestionsController < ApplicationController
    

    def new
        @question = Question.order("RANDOM()").limit(1)[0]
    end

    def create
        @question = Question.find(params[:question_id])
        if @question.correct_answer.id == params[:answer_id].to_i
            @user.number_correct += 1
            @user.save
            flash[:message] = "Correct"
        else
            flash[:message] = "Incorrect"
        end
        redirect_to '/random-question'
    end

    def start_over
        @user.number_correct = 0
        @user.save
        redirect_to '/random-question'
    end

end

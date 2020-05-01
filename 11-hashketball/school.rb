require 'pry'
@school = {}

def add_student_to_grade(name,grade)
    binding.pry
    if @school[grade]
      @school[grade] << name
    else 
      @school[grade] = [name]
    end
    puts @school
end
  
add_student_to_grade("Chuk",6)
add_student_to_grade("Anderson",7)
add_student_to_grade("Anderson",8)
add_student_to_grade("Anderson",8)
add_student_to_grade("Anderson",6)
add_student_to_grade("Anderson",6)
add_student_to_grade("Anderson",6)
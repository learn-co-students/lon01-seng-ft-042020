class Student
@@all = []
attr_reader :name

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def add_boating_test(test,status,instructor)
        # binding.pry
        BoatingTest.new(self,test,status,instructor)
    end

    def self.find_student(first_name)
        self.all.find {|student| student.name == first_name}
    end

    def grade_percentage
        my_tests = BoatingTest.all.select {|test| test.student == self}
        passed_tests = my_tests.select {|test| test.status == "passed"}.length
        (passed_tests / my_tests.length.to_f) * 100
    end

end

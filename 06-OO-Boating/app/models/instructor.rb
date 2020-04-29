class Instructor
@@all = []
    attr_reader :name
    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def pass_student(student,test_name)
        test = BoatingTest.all.select {|bt| bt.student == student}
        found_test = test.length > 0 ? test.find {|bt| bt.test == test_name} : false
        if found_test
            found_test.status = "passed"
            found_test
        else
            BoatingTest.new(student,test_name,"passed",self)
        end
    end

    def fail_student(student,test_name)
        test = BoatingTest.all.select {|bt| bt.student == student}
        found_test = test.length > 0 ? test.find {|bt| bt.test == test_name} : false
        if found_test
            found_test.status = "failed"
            found_test
        else
            BoatingTest.new(student,test_name,"failed",self)
        end
    end
end

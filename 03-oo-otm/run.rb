require "pry"
require_relative "./post"
require_relative "./user"

dan = User.new("Daniel")
daniel_clone = User.new("Daniel")
anderson = User.new("Anderson")

dan.create_post("hi")
dan.create_post("hello")
dan.create_post("goodbye")
anderson.create_post("52834298539Djiguhwrn,")
anderson.create_post("%^%%^^%^%^gdsshg39Djiguhwrn,")
anderson.create_post("@$*$(34298539Djiguhwrn,")
anderson.create_post("_____528342985_______,")

binding.pry

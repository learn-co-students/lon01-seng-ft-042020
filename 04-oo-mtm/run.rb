require "pry"
require_relative "./doctor"
require_relative "./patient"
require_relative "./appointment"

dre = Doctor.new("Dre")
mario = Doctor.new("Mario")
jekyll = Doctor.new("Jekyll")

daniel = Patient.new("Daniel")
anderson = Patient.new("Anderson")

Appointment.new(dre, daniel, "flu", 15)
Appointment.new(mario, daniel, "flu", 30)
Appointment.new(dre, daniel, "--private--", 45)
Appointment.new(dre, anderson, "flu", 15)

binding.pry

### QUESTION FOR YOU TO SOLVE:
# which patient has the highest average appt time?
# TIP: you need a method on patient instance that gives you a patient's avg appt time
# then take it from there ...

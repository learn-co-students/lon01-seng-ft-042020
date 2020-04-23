class Appointment
  @@all = []

  attr_accessor :doctor, :patient, :reason, :duration

  def initialize(doctor, patient, reason, duration)
    @doctor = doctor
    @patient = patient
    @reason = reason
    @duration = duration
    @@all << self
  end

  def self.all
    @@all
  end

  def self.average_duration
    all_durations = self.all.map { |appt| appt.duration }.sum
    all_durations / self.all.length.to_f
  end
end

class Patient
  @@all = []

  attr_accessor :name

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def appointments
    Appointment.all.select { |appt| appt.patient == self }
  end

  def doctors
    appointments.map { |appt| appt.doctor }.uniq
  end
end

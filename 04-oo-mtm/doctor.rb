class Doctor
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
    Appointment.all.select { |appt| appt.doctor == self }
  end

  def patients
    appointments.map { |appt| appt.patient }.uniq
  end
end

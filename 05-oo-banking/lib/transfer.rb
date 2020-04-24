class Transfer
  attr_reader :sender, :receiver, :amount, :status

  def initialize(sender, receiver, amount)
    @sender = sender
    @receiver = receiver
    @amount = amount
    @status = "pending"
  end

  def sender_sufficent_funds?
    sender.balance >= @amount
  end

  def completed?
    @status == "complete"
  end

  def both_accounts_valid?
    sender.valid? && receiver.valid?
  end

  def valid?
    both_accounts_valid? && !completed? && sender_sufficent_funds?
  end

  def execute_transaction
    if self.valid?
      sender.withdraw(@amount)
      receiver.deposit(@amount)
      @status = "complete"
      return @status
    else
      @status = "rejected"
      return "Transaction rejected. Please check your account balance."
    end
  end

  def reverse_transfer
    if @status == "complete"
      transfer = Transfer.new(@receiver, @sender, @amount)
      transfer.execute_transaction
      @status = "reversed"
    end
  end
end

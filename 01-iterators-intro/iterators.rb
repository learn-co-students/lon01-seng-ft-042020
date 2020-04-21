require "pry"

numbers = [1, 30, 31, 70, 50, 52, 53, 54, 59, 71, 101]

binding.pry
# each - iterates over the enumerable, performs a block of code for each element, doesn't change anything, returns original
# map - does the same, but creates a new array with the elements that are results of the required operation
# select - selects elements based on a predicate, ALWAYS RETURNS AN ARRAY, EVEN IF ONLY ZERO OR ONE ELEMENT MATCHES
# find - iterates over the enumberable, stops at the first item that matches the predicate, returns JUST THE ITEM

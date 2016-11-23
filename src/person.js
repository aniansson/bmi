function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;

  Person.prototype.calculate_bmi_metric = function() {
   calculator = new BMICalculator();
    calculator.metric_bmi(this);
    // calculator.imperial_bmi(this);
  };
};

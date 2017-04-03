describe('englishLanguage', function() {
  it('should return "eight" when passed 8', function() {
    englishLanguage(8).should.equal("eight");
  });

  it('should reutn "twenty two" when passed 22', function() {
    englishLanguage(22).should.equal("twenty two");
  });

  it('should return "thirty" when passed 30', function() {
    englishLanguage(30).should.equal("thirty");
  });

  it('should return "seventeen" when passed 17', function() {
    englishLanguage(17).should.equal("seventeen");
  });

  it('should return "one hundred fifteen" when 115 if passed', function() {
    englishLanguage(115).should.equal("one hundred fifteen");
  });

  it('translates numbers over 1,000', function() {
    englishLanguage(1015).should.equal("one thousand fifteen");
  });
  
  it('translates numbers over 10,000', function() {
    englishLanguage(18405).should.equal("eighteen thousand four hundred five");
  });

  it('should return "two hundred fifty thousand two hundred five" when 250205 is passed', function() {
    englishLanguage(250205).should.equal("two hundred fifty thousand two hundred five");
  });

  it('should return "one million one hundred thousand" when 1100000 is passed', function() {
    englishLanguage(1100000).should.equal("one million one hundred thousand");
  });
  
  it('should return "one billion one hundred thousand one" when 1100000001 is passed', function() {
    englishLanguage(1100000001).should.equal("one billion one hundred million one");
  });
    it('should return "one trillion one hundred thousand one" when 1100000000001 is passed', function() {
    englishLanguage(1100000000001).should.equal("one trillion one hundred billion one");
  });
});

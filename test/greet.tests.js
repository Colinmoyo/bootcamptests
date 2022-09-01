describe('Test my greet function' , function(){
    it("it should return 'Hello, Colin' when called with 'Colin' " , function(){
        assert.equal("Hello, Colin", greet("Colin"), "this should not be true");
    });
    it("it should return 'Hello, Hloni' when called with 'Hloni' " , function(){
            assert.equal("Hello, Hloni", greet("Hloni"), "this should not be true");    
    });
});
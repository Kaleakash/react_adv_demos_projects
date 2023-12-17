import { add, div, mul, sub } from "./Operation"


describe("Operation testing ",()=> {
    it("add testing ",()=> {
        let result = add(10,20);
        expect(result).toEqual(30);
    })
    it("sub testing ",()=> {
        let result = sub(20,10);
        expect(result).toEqual(10);
        
    })
    it("mul testing ",()=> {
        let result = mul(4,2);
        expect(result).toEqual(8);
    })
    it("div testing ",()=> {
        let result = div(10,2);
        expect(result).toEqual(5);
    })
})
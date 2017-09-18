import{ compute } from './compute'

describe("compute", ()=>{
    it('should return 0 when negative', ()=>{
        const result = compute(-1);
        expect(result).toBe(0);        
    })

    it('should incrment by 1 when positive', ()=>{
        const result = compute(1);
        expect(result).toBe(2);        
    })
})
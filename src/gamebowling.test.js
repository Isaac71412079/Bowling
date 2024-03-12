import game from "./jugadas";

describe("JUEGO BOWLING", () => {
  
  it("Dato vacio", () => {
    const escore=new game();
    escore.rollmany(20,0)
    expect(escore.getScore()).toEqual(0);
  });
  it("Para el numero 20", () => {
    const escore=new game();
    escore.rollmany(20,1)
    expect(escore.getScore()).toEqual(20);
  });
});



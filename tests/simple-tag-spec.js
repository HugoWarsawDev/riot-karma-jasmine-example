describe('simple-tag tests', function() {

  function Once(){
    
    console.log('called');
  }
  beforeAll(function() {    
    var html = document.createElement('simple-tag')
    document.body.appendChild(html)
  });

  beforeEach(function() {    
    tag = riot.mount('simple-tag')[0]
  });

  it('simple-tag is mounted', function() {
    expect(tag).toBeDefined()
    expect(tag.isMounted).toBe(true);
  })

  it('after mount tag has no DOM children', function() {
    expect(tag.root.children.length).toEqual(0);
  })

  it('after addRow first time tag has one DOM child', function() {
    //act
    tag.addRow({ text: "Row" });    
    //assert
    expect(tag.root.children.length).toEqual(1);
  })  

  it('after addRow 5x tag has 5 DOM child', function() {
    //act
    for(var i=0; i<5; i++)
      tag.addRow({ text: "Row" });    
    //assert
    expect(tag.root.children.length).toEqual(5);
  })

  it('after addRow tag has DOM child with passed "text"', function() {
    //act
    tag.addRow({ text: "Row" });    
    //assert
    expect(tag.root.children.length).toEqual(1);
    expect(tag.root.children[0].innerHTML).toEqual("Row");
  })  
})
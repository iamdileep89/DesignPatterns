/*
This is a structural pattern that composes objects into tree like structures to represent whole part hierarchies
Each node in tree like structure can either an individual or  a composed collection of objects 
*/


class Component {
    constructor(name){
        this._name = name;
    }
    getNodeName(){
        return this._name;
    }
    
    //abstract methods that needs overriden
    getType(){}
    addChild(component){}
    removeChildByName(componentName){}
    removeChildByIndex(index){}
    getChildByName(componentName){}
    getChildByIndex(index){}
    noOfChildren(){}

    // static method
    static logTreeStructure(root) {
        let treeStructure = '';
        function traverse(node, indent = 0) {
          treeStructure += `${'--'.repeat(indent)}${node.getNodeName()}\n`;
          indent++;
          for (let i = 0, length = node.noOfChildren(); i < length; i++) {
            traverse(node.getChildByIndex(i), indent);
          }
        }

        traverse(root);
        return treeStructure;
    }
}

// A leaf component which has no child and implements Component
class Leaf extends Component{
    constructor(name){
        super(name)
        this._type = 'Leaf Node'
    }
    getType(){
        return this._type;
    }
    noOfChildren(){
        return 0;
    }
}

// A Composite Component which has children and implements Component
class Composite extends Component{
    constructor(name){
        super(name)
        this._type = "Composite Node"
        this._children = []
    }
    getType(){
        return this._type
    }
    addChild(component){
        this._children = [...this._children, component]
    }
    removeChildByName(componentName){
        this._children = [...this._children].filter(component => component.getNodeName !== componentName) 
    }
    removeChildByIndex(index){
        this._children =  [...this._children.slice(0, index),...this._children.slice(index+1)]
    }
    getChildByName(componentName){
        return this._children.find(component => component.name == componentName)
    }
    getChildByIndex(index){
        return this._children[index]
    }
    noOfChildren(){
        return this._children.length;
    }
}


// Usage of composite pattern

const tree = new Composite('root');
tree.addChild(new Leaf('left'));

const right = new Composite('right');
tree.addChild(right);

right.addChild(new Leaf('right-left'));

const rightMid = new Composite('right-middle');
right.addChild(rightMid);

right.addChild(new Leaf('right-right'));
rightMid.addChild(new Leaf('left-end'));
rightMid.addChild(new Leaf('right-end'));

// log
console.log(Component.logTreeStructure(tree));

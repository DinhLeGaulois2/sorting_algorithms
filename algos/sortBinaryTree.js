var sortBinaryTree = {
	Node:function(value){
		this.nodeValue = value;
		this.left = null;
		this.right = null;
	},

	theRoot:null,
	numbers:[],

	shownumbers:function(){ return sortBinaryTree.numbers.reduce((a,b) => a + " - " + b); },

	isInfEq:function(value1, value2){ 
		return value1 <= value2; 
	},

	insert:function(value){
		if(sortBinaryTree.theRoot==null) sortBinaryTree.theRoot = new sortBinaryTree.Node(value);
		else sortBinaryTree.insertRecursive(value, sortBinaryTree.theRoot);
	},

	insertRecursive:function(value, aNode){
		var n = null;
		if(aNode==null) aNode = new sortBinaryTree.Node(value);
		else{
			if(sortBinaryTree.isInfEq(value, aNode.nodeValue)){ // goes to the left side
				if(aNode.left==null)
					aNode.left = new sortBinaryTree.Node(value);
				else
					sortBinaryTree.insertRecursive(value, aNode.left);
			}
			else{ // goes to the right side
				if(aNode.right==null)
					aNode.right = new sortBinaryTree.Node(value);
				else
					sortBinaryTree.insertRecursive(value, aNode.right);
			}
		}
	},

	buildTree:function(){
		sortBinaryTree.numbers.map(a => sortBinaryTree.insert(a));
	},

	// we don't want to know how the method run internally
	getSortedList:function(){
		sortBinaryTree.buildTree();
		// we need to used the "root" to run a "recursive function"
		return sortBinaryTree.showTree(sortBinaryTree.theRoot);
	},

	showTree:function(aNode){
		if(aNode==null)
			return "";
		else{
			if(aNode.left==null){
				if(aNode.right==null)
					return aNode.nodeValue;
				else
					return aNode.nodeValue + ", " + sortBinaryTree.showTree(aNode.right);
			}
			else{
				if(aNode.right==null)
					return sortBinaryTree.showTree(aNode.left) + ", " + aNode.nodeValue;
				else
					return sortBinaryTree.showTree(aNode.left) + ", " + aNode.nodeValue + ", " + sortBinaryTree.showTree(aNode.right);		
			}
		}
	}
};
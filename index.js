const spy = () => 'This is a callback';
const receivesAFunction = (spy) => spy();
const returnsANamedFunction = () =>(function logger(){
    return 'this is a named function'
});
const returnsAnAnonymousFunction =() =>(()=>{
    return 'this is an anonymous function'
})
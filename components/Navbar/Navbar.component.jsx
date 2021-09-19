

export const Navbar = () => {
  return(
    <div style={{display : 'flex', justifyContent : 'space-between'
    ,  backgroundColor : 'black', color : 'white' , padding : '0 80px'
  }}>
      <h4><a href="/">Home</a></h4>
      <h4><a href="/about">About</a></h4>
      <h4><a href="/posts">Posts</a></h4>
      <h4>Contact</h4>
    </div>
  );
}

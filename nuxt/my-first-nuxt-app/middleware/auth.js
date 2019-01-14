import Cookies from 'universal-cookie';

export default ({req,route,redirect}) => {
  console.log(route.path)
  console.log(0)
  if(['/'].includes(route.path)){
    console.log(1)
    return
  }
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')
  console.log(cookies)
  console.log(credential)
  if(credential && route.path === '/login'){
    console.log(2)
    return redirect(`/`)
  }

  if (credential && route.path !== '/login') {
    console.log(3)
    return redirect('/login')
  }

  console.log(4)
}

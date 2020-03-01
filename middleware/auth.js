import Cookies from 'universal-cookie'

// オブジェクトcontextが引数として渡されている
// req: Node.jsサーバーからのリクエスト
// route: Vue Routerのrouterオブジェクト
// redirect: 302リダイレクトのためのredirect関数
export default ({ req, route, redirect }) => {
  console.log(route.path)
  if (['/'.includes(route.path)]) {
    return
  }

  // Node.jsサーバーからのリクエストによってインスタンス化方法を変える
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')

  if (credential && route.path === '/login') {
    return redirect('/')
  }

  if (!credential && route.path !== '/login') {
    return redirect('/login')
  }
}
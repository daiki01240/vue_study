export default function ({ $axios}) {
  $axios.onRequest((condfig) => {
    if(process.env.QIITA_TOKEN){
      config.header.common['Authorization'] = process.env.QIITA_TOKEN
    }
    return config
  })

}

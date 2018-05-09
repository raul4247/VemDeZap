function analytics(){
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())

    gtag('config', 'UA-118709061-1')
}

analytics()

import localFont from "next/font/local"


const greycliffBold = localFont({
    display: 'swap',
    src: '../../public/fonts/GreycliffCF-Heavy.otf',
    variable: "--font-gregxb",
})

const greycliffRegular = localFont({
    display: 'swap',
    src: '../../public/fonts/GreycliffCF-Regular.otf',
    variable: "--font-gregb",
})
const greycliffMedium = localFont({
    display: 'swap',
    src: '../../public/fonts/GreycliffCF-Medium.otf',
    variable: "--font-gregdb",
})


 

export { greycliffBold, greycliffRegular, greycliffMedium}

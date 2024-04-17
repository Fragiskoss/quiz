import { ReactNode } from "react"


interface LayoutProps {
children: ReactNode
}

const Layout = (props: LayoutProps) => {


  return (
  <>
    <h3>This is the admin section</h3>
      {props.children}
      <div>this is the end of the admin layout</div>
    </>
  )
}

export default Layout

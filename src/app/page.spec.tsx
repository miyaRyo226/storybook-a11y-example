import Page from "./page"
import "@testing-library/jest-dom"
import {render,screen} from "@testing-library/react"
import preview from 'jest-preview';

describe("page.tsx",()=>{
    it("コンポーネントが表示されること",()=>{
        render(<Page />)
        preview.debug()
        expect(screen.getByText("Instantly deploy your Next.js site to a shareable URL with Vercel.")).toBeInTheDocument()
    })
})
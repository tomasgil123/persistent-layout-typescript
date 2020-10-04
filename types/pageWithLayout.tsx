import { NextPage } from 'next'
import MainLayout from '../layouts/mainLayout'
import SecondaryLayout from '../layouts/secondarylayout'

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType

import React from 'react'
import PageWithLayoutType from '../types/pageWithLayout'

import SecondaryLayout from '../layouts/secondaryLayout'

const SecondaryPage: React.FC = () => {
    return (
        <div>
            This is the secondary page
        </div>
    )
}



;(SecondaryPage as PageWithLayoutType).layout = SecondaryLayout 

export default SecondaryPage
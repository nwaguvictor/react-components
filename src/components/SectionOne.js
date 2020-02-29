import React from 'react'
import {Title} from './section_one/Title'
import Text from './section_one/Text'
import Button from './section_one/Button'

const SectionOne = () => {
    return (
        <div>
            <div className="section_one">
                <Title />
                <Text />
                <Button />
            </div>
        </div>
    )
}

export default SectionOne

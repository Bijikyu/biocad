
import { View } from 'jfw/ui'
import { h, svg, VNode } from 'jfw/vdom'

import renderDefs from './renderDefs'
import renderAnnotations from './renderAnnotations'
import renderElements from './renderElements'
import renderLineNumbers from './renderLineNumbers'
import SequenceEditor from "./SequenceEditor";

export default class SequenceEditorBody extends View {

    sequenceEditor: SequenceEditor

    constructor(sequenceEditor) {

        super(sequenceEditor.app)

        this.sequenceEditor = sequenceEditor

    }

    render():VNode {

        console.time('render seq editor body')

        const sequenceEditor = this.sequenceEditor

        const svgElements = []

        Array.prototype.push.apply(svgElements, renderDefs(sequenceEditor))
        Array.prototype.push.apply(svgElements, renderAnnotations(sequenceEditor))
        Array.prototype.push.apply(svgElements, renderElements(sequenceEditor))
        Array.prototype.push.apply(svgElements, renderLineNumbers(sequenceEditor))

        console.timeEnd('render seq editor body')

        return svg('g', svgElements)

    }

}


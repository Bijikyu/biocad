
import { VNode, h } from 'jfw/vdom'
import { SBOLXGraph, triple, node } from "sbolgraph";
import PropertyEditor from "./PropertyEditor";
import { keyupChange } from 'jfw/event'
import PropertyAccessor from './PropertyAccessor';

export default class PropertyEditorOneline extends PropertyEditor {

    title:string
    accessor:PropertyAccessor

    constructor(title:string, accessor:PropertyAccessor) {

        super()

        this.title = title
        this.accessor = accessor

    }

    render(graph:SBOLXGraph):VNode {

        let value:string|undefined = this.accessor.get(graph)

        return h('tr.sf-inspector-oneline', [
            h('td', this.title),
            h('td', [
                h('input', {
                    value: value || '',
                    'ev-keyup': keyupChange(onChange, { editor: this, graph: graph })
                })
            ])
        ])
    }
}

function onChange(data:any) {

    let editor:PropertyEditorOneline = data.editor
    let graph:SBOLXGraph = data.graph

    console.log(data.value)

    editor.accessor.set(graph, data.value)

}

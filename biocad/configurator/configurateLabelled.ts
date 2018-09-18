
import LabelledDepiction from "biocad/cad/LabelledDepiction";
import InstructionSet from "biocad/cad/layout-instruction/InstructionSet";
import LabelDepiction from "../cad/LabelDepiction";
import Depiction from "biocad/cad/Depiction";
import { Vec2 } from "jfw/geom";

export default function configurateLabelled(labelled:LabelledDepiction, instructions:InstructionSet) {


    let label = labelled.getLabel()
    let thing = labelled.getLabelled()

    thing.offset = Vec2.fromXY(0, label.height)

    if(labelled.sizeExplicit) {

        label.size = Vec2.fromXY(labelled.size.x, label.size.y)
        thing.size = Vec2.fromXY(labelled.size.x, labelled.size.y - label.size.y)
        
    } else {

        labelled.size = Vec2.fromXY(
            Math.max(label.size.x, thing.size.x),
            label.size.y + thing.size.y
        )


    }





        

    /*
    const label:LabelDepiction|undefined = depiction.label

    if(label !== undefined) {

        if (depiction.orientation === Orientation.Reverse) {
            depiction.setMarginBottom(label.size.y)
            label.offset = Vec2.fromXY(0, depiction.innerSize.y)
        } else {
            label.offset = Vec2.fromXY(0, - label.size.y)
            depiction.setMarginTop(label.size.y)
        }

        const overflowRight:number = label.size.x - depiction.size.x

        if(overflowRight > 0) {
            depiction.marginRight = overflowRight

            const foo:Vec2 = depiction.size.add(Vec2.fromXY(overflowRight, 0))

            console.warn('depiction ' + depiction.debugName + ' changing size from ' + depiction.size + ' to ' + foo + ' to accommodate for label')

            depiction.size = depiction.size.add(Vec2.fromXY(overflowRight, 0))
        }
    }
    */

}
 
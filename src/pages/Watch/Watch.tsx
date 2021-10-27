import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"

export default function Watch(params:any): JSX.Element {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video controls autoPlay={true}>
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
            </video>
        </div>
    )
}
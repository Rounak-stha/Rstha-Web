import { ImageFlexBox } from '@/components/MdxComponents'

const IMAGE_SRC =
    'https://cdn.sanity.io/images/vsfc0kgw/production/4c3c31e6ff7b6aec8dc469c50efc40dce2e3dc2f-5157x3438.jpg?width=800'
const IMAGE_CAPTION =
    'Source: https://www.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_13450330.htm'

export default function DesignPageHeaerImage() {
    return (
        <ImageFlexBox
            images={[
                {
                    src: IMAGE_SRC,
                    caption: IMAGE_CAPTION,
                    width: 736,
                    height: 320,
                },
            ]}
        />
    )
}

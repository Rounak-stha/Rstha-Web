import { CheckBadge, CrossBadge } from "@/components/AtomsAndMolecules/AllBadges";
import { EyeIconLabel, ForkIconLabel, StarIconLabel } from "@/components/AtomsAndMolecules/AllIconLabel";
import Button from "@/components/AtomsAndMolecules/Button";
import ColorCircle from "@/components/AtomsAndMolecules/ColorCircle";
import Input from "@/components/AtomsAndMolecules/Input";
import InputWithOptions from "@/components/AtomsAndMolecules/InputWithOptions";
import SelectOptions from "@/components/AtomsAndMolecules/SelectOptions";
import SendIconButton from "@/components/AtomsAndMolecules/SendIconButton";
import TextArea from "@/components/AtomsAndMolecules/TextArea";
import Callout from "@/components/MdxComponents/Callout";
import ImageFlexBox from "@/components/MdxComponents/ImageFlexBox";
import { H1, H2, H3, H4 } from "@/components/Typography/Headings";
import { P1, P2, P3, P4 } from "@/components/Typography/ParaGraph";
import ColorPallete from "@/components/views/ColorPallete";
import Container from "@/components/views/Container";
import * as customColors from '../constants/customColors'


export default function Design() {
    return (
        <>
            <H1>Rstha-Web Design System</H1>
            <hr className="mb-8" />
            <ImageFlexBox images={
                [{
                    src: 'https://cdn.sanity.io/images/vsfc0kgw/production/4c3c31e6ff7b6aec8dc469c50efc40dce2e3dc2f-5157x3438.jpg?width=700',
                    caption: 'Source: https://www.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_13450330.htm'
                }]
            } />

            <div className="mt-8 mb-14">
                <H2 id='typography' className='mb-8'>TypoGraphy</H2>
                <div id='font-family' className="mb-8">
                    <H3>Font Family</H3>
                    <H4 className='listItem'>Source Sans Pro</H4>
                    <P1 className='mb-4'>I see her everywhere in every beautiful things I see; on the mountains, on the grass, on the Japanese Creamic Vessel, when smooth breeze runs through my skin.</P1>
                    <H4 className='listItem'>Roboto Mono</H4>
                    <P1 className='mb-4' mono>I see her everywhere in every beautiful things I see; on the mountains, on the grass, on the Japanese Creamic Vessel, when smooth breeze runs through my skin.</P1>
                </div>
                <div id='headings' className="mb-8">
                    <H3>Headings</H3>
                    <div className="mb-6">
                        <H4 className='listItem'>H1</H4>
                        <H1>Tell me something funny now, will you?</H1>
                    </div>
                    <div className="mb-6">
                        <H4 className='listItem'>H2</H4>
                        <H2>Tell me something funny now, will you?</H2>
                    </div>
                    <div className="mb-6">
                        <H4 className='listItem'>H3</H4>
                        <H3>Tell me something funny now, will you?</H3>
                    </div>
                    <H4 className='listItem'>H4</H4>
                    <H4>Tell me something funny now, will you?</H4>
                </div>
                <div id='texts' className="mb-8">
                    <H3>Texts</H3>
                    <div className="mb-6">
                        <H4 className='listItem'>Text 1</H4>
                        <P1>Tell me something funny now, will you?</P1>
                    </div>
                    <div className="mb-6">
                        <H4 className='listItem'>Text 2</H4>
                        <P2>Tell me something funny now, will you?</P2>
                    </div>
                    <div className="mb-6">
                        <H4 className='listItem'>Text 3</H4>
                        <P3>Tell me something funny now, will you?</P3>
                    </div>
                    <H4 className='listItem'>Text 4</H4>
                    <P4>Tell me something funny now, will you?</P4>
                </div>
            </div>

            <div className="mb-14">
                <H2 id='colors'>Colors</H2>
                <div className="mb-6">
                    <H4 className='listItem'>Global Backgrounds</H4>
                    <div className="flex gap-4">
                        <ColorCircle bgClass='bg-back-dark' />
                        <ColorCircle bgClass='bg-back-light' />
                    </div>
                </div>

                <div className="mb-6">
                    <H4 className='listItem'>Texts</H4>
                    <div className="flex gap-4">
                        <ColorCircle bgClass='bg-light' />
                        <ColorCircle bgClass='bg-lighter' />
                        <ColorCircle bgClass='bg-dark' />
                        <ColorCircle bgClass='bg-darker' />
                    </div>
                </div>

                <div className="mb-6">
                    <H4 className='listItem'>Color Pallete</H4>
                    <div className="flex flex-wrap gap-4">
                        {
                            Object.keys(customColors).map(color => <ColorPallete key={color} colors={customColors[color]} />)
                        }
                    </div>
                    
                </div>
            </div>

            <div className="mb-14">
                <H2 id='container'>Container</H2>
                <div className="mb-6">
                    <H4 className='listItem'>Base Container</H4>
                    <Container className='h-20' />
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Base Container: Glow on Hover</H4>
                    <Container outlined glowClass='from-yellow-500 via-pink-500 to-orange-500' className='h-20' />
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Outlined Container</H4>
                    <Container outlined className='h-20' />
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Outlined Container: Glow on Hover</H4>
                    <Container outlined glowClass='from-blue-500 via-cyan-500 to-indigo-500' className='h-20' />
                </div>
            </div>

            <div className="mb-14">
                <H2 id='callout'>Callout</H2>
                <div className="mb-6">
                    <H4 className='listItem'>Info Callout</H4>
                    <Callout type='info'>This callout block holds normal information.</Callout>
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Info Callout</H4>
                    <Callout type='question'>This callout block holds question.</Callout>
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Info Callout</H4>
                    <Callout type='warning'>This callout block holds warning information.</Callout>
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Info Callout</H4>
                    <Callout type='danger'>This callout block holds danger information.</Callout>
                </div>
            </div>

            <div className="mb-14">
                <H2 id='inputs'>Inputs</H2>
                <div className="mb-6">
                    <H4 className='listItem'>Normal Text Input</H4>
                    <Input placeholder='Place Your Text' />
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Input With Options</H4>
                    <InputWithOptions name='Type Comedy' options={['Comedy', 'Hilarious', 'Terrific']} />
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Text Area</H4>
                    <TextArea placeholder='Place Your Text' />
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Select</H4>
                    <SelectOptions name='Options' options={['Comedy', 'Hilarious', 'Terrific']} />
                </div>
            </div>
            <div className="mb-14">
                <H2 id='inputs'>Buttons</H2>
                <div className="mb-6">
                    <H4 className='listItem'>Normal Buttons</H4>
                    <div className="flex items-center gap-3 flex-wrap">
                        <Button>Button</Button>
                        <Button size='md'>Button</Button>
                        <Button size='lg'>Button</Button>
                    </div>
                </div>

                <div className="mb-6">
                    <H4 className='listItem'>Outlined Button</H4>
                    <div className="flex items-center gap-3 flex-wrap">
                        <Button outlined>Button</Button>
                        <Button size='md' outlined>Button</Button>
                        <Button size='lg' outlined>Button</Button>
                    </div>
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Disabled Button</H4>
                    <div className="flex items-center gap-3 flex-wrap">
                        <Button disabled>Button</Button>
                        <Button size='md' disabled>Button</Button>
                        <Button size='lg' disabled>Button</Button>
                    </div>
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Send Icon Buttons</H4>
                    <div className="flex items-center gap-3 flex-wrap">
                        <SendIconButton />
                        <SendIconButton size='md' />
                        <SendIconButton size='lg' />
                    </div>
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Loading Icon Button</H4>
                    <div className="flex items-center gap-3 flex-wrap">
                        <SendIconButton loading />
                        <SendIconButton loading size='md' />
                        <SendIconButton loading size='lg' />
                    </div>
                </div>
            </div>
            <div className="mb-14">
                <H2 id='inputs'>Icon Label</H2>
                <div className="mb-6">
                    <H4 className='listItem'>Star Icon Label</H4>
                    <StarIconLabel number={500} />
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Eye Icon Label</H4>
                    <EyeIconLabel numner={4000} />
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Git Icon Label</H4>
                    <ForkIconLabel number={300} />
                </div>
            </div>
            <div className="mb-8">
                <H2 id='inputs'>Badges</H2>
                <div className="mb-6">
                    <H4 className='listItem'>Check Badges</H4>
                    <div className="flex items-center gap-2">
                        <CheckBadge />
                        <CheckBadge size='md' />
                        <CheckBadge size='lg' />
                    </div>
                </div>
                <div className="mb-6">
                    <H4 className='listItem'>Cross Badges</H4>
                    <div className="flex items-center gap-2">
                        <CrossBadge />
                        <CrossBadge size='md' />
                        <CrossBadge size='lg' />
                    </div>
                </div>
            </div>
        </>
    )
}
import { Field, Textarea } from '@headlessui/react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import SelectInput from '../common/selectInput'

export default function ChatInputComponent() {
    const modelOptions = ["default", "gpt4", "claude", "gemini", "llama3"]

    const handleModelChange = (selectedModel: string) => {
        console.log('Selected model:', selectedModel)
    }
    return (
        <div className="w-full max-w-6xl mx-auto">
            <Field className="space-y-3">
                <div className="relative">
                    <Textarea 
                        name="description"
                        rows={4}
                        className="w-full px-4 pt-3 pb-12 pr-20 border-2 resize-none focus:ring-2 focus:ring-offset-2 transition-colors dark:bg-gray-800 dark:text-white placeholder:text-gray-500 text-sm md:text-base rounded-lg"
                        style={{ 
                            borderColor: '#1ab06f',
                        }}
                        placeholder="Ask anything 😀"
                    />

                    <div className="absolute bottom-2 left-2 flex gap-2 z-10">
                        <SelectInput 
                            options={modelOptions}
                            defaultValue="default"
                            placeholder="Model"
                            onChange={handleModelChange}
                            className="w-24"
                        />

                    </div>

                    <button 
                        type="submit"
                        className="absolute bottom-2 right-2 p-2 text-white rounded-md hover:opacity-90 focus:ring-2 focus:ring-offset-2 transition-colors"
                        style={{ 
                            background: 'linear-gradient(135deg, #1ab06f 0%, #16965e 100%)'
                        }}
                    >
                        <PaperAirplaneIcon className="w-12 h-8" />
                    </button>
                </div>
            </Field>
        </div>
    )
}
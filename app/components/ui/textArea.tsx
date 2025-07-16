import { Field,Textarea } from '@headlessui/react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'


export default function ChatInputComponent() {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Field className="space-y-3">
                <div className="relative">
                    <Textarea 
                        name="description"
                        rows={4}
                        className="w-full px-4 py-3 pr-20 border-2 resize-none focus:ring-2 focus:ring-offset-2 transition-colors dark:bg-gray-800 dark:text-white placeholder:text-gray-500 text-sm md:text-base rounded-lg"
                        style={{ 
                            borderColor: '#1ab06f',
                        }}
                        placeholder="Ask anything 😀"
                    />
                    <button 
                        type="submit"
                        className="absolute bottom-2 right-2 p-2 text-white rounded-md hover:opacity-90 focus:ring-2 focus:ring-offset-2 transition-colors"
                        style={{ 
                            backgroundColor: '#1ab06f',
                        }}
                    >
                        <PaperAirplaneIcon className="w-12 h-4" />
                    </button>
                </div>
            </Field>
        </div>
    )
}
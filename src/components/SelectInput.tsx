import type { ComponentPropsWithoutRef } from "react";

export type TorrentItemButtonProps = {
    children: React.ReactNode;
    searchable?: false;
    searchIcon?: never;
    searchPlaceholder?: never;
    maxHeight?: string | number;
    startingValue?: string | number;
    width?: string;
} & ComponentPropsWithoutRef<'div'> | {
    children: React.ReactNode;
    searchable?: true;
    searchIcon: React.ReactNode;
    searchPlaceholder: string;
    maxHeight?: string | number;
    startingValue?: string | number;
    width?: string;
} & ComponentPropsWithoutRef<'div'>;

export const SelectInput = (props: TorrentItemButtonProps) => {
    return (
        <div id={props.id} className="select">
            <button
                type="button"
                className={`btn-outline ${props.width ?? 'w-full'}`}
                id={`${props.id}-trigger`}
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls={`${props.id}-listbox`}
            >
                <span className="truncate"></span>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down text-muted-foreground opacity-50 shrink-0"
                >
                    <path d="m7 15 5 5 5-5"/>
                    <path d="m7 9 5-5 5 5"/>
                </svg>
            </button>

            <div id={`${props.id}-popover`} data-popover aria-hidden="true">
                {props.searchable && (
                    <header>
                        {props.searchIcon ?? null}
                        <input
                            type="text"
                            value=""
                            placeholder={props.searchPlaceholder ?? ''}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                            aria-autocomplete="list"
                            role="combobox"
                            aria-expanded="false"
                            aria-controls={`${props.id}-listbox`}
                            aria-labelledby={`${props.id}-trigger`}
                        />
                    </header>
                )}

                <div
                    role="listbox"
                    id={`${props.id}-listbox`}
                    aria-orientation="vertical"
                    aria-labelledby={`${props.id}-trigger`}
                    className={`scrollbar overflow-y-auto max-h-80`}
                >
                    {props.children}
                </div>
            </div>

            <input type="hidden" name={`${props.id}-value`} value={props.startingValue} />
        </div>
    );
}

import dynamic from "next/dynamic"

export function dynamicImport(componentPath: string, options = {}) {
  return dynamic(() => import(`@/${componentPath}`), {
    ssr: true,
    loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 noon:bg-gray-200 rounded-md h-32"></div>,
    ...options,
  })
}

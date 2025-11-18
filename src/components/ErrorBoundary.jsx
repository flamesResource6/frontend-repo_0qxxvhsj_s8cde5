import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to console for quick visibility
    // You could also send this to a logging service
    console.error('App crashed:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6">
          <div className="max-w-lg text-center">
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="mt-3 text-sky-200/90">The page failed to load. Please try refreshing. If the issue persists, share your browser and device so we can fix it.</p>
            <pre className="mt-4 text-left whitespace-pre-wrap text-xs text-sky-300/80 bg-white/5 p-3 rounded-lg border border-white/10 overflow-auto max-h-48">
{String(this.state.error)}
            </pre>
            <button onClick={() => window.location.reload()} className="mt-6 rounded-xl bg-sky-500 px-5 py-2 font-semibold text-slate-900 shadow shadow-sky-500/30 hover:brightness-110">Reload</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

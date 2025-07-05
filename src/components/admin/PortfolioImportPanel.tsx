import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { portfolioImportService } from '@/services/portfolioImportService';
import { Loader2, Upload, CheckCircle, XCircle } from 'lucide-react';

const PortfolioImportPanel = () => {
  const [importing, setImporting] = useState(false);
  const [importResults, setImportResults] = useState<{
    success: string[];
    failures: { title: string; error: string }[];
  } | null>(null);
  const { toast } = useToast();

  const availableProjects = portfolioImportService.getAvailableProjects();

  const handleImportAll = async () => {
    try {
      setImporting(true);
      setImportResults(null);
      
      const results = await portfolioImportService.importAllProjects();
      setImportResults(results);
      
      toast({
        title: "Import Completed",
        description: `Successfully imported ${results.success.length} projects. ${results.failures.length} failed.`,
        variant: results.failures.length > 0 ? "destructive" : "default",
      });
    } catch (error) {
      console.error('Import failed:', error);
      toast({
        title: "Import Failed",
        description: "An error occurred during the import process.",
        variant: "destructive",
      });
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Portfolio Projects Import
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Import {availableProjects.length} pre-configured portfolio projects
              </p>
              <p className="text-xs text-gray-500 mt-1">
                This will add all the portfolio projects to your database
              </p>
            </div>
            <Button 
              onClick={handleImportAll} 
              disabled={importing}
              className="flex items-center gap-2"
            >
              {importing && <Loader2 className="h-4 w-4 animate-spin" />}
              {importing ? 'Importing...' : 'Import All Projects'}
            </Button>
          </div>

          {/* Available Projects Preview */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Available Projects:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {availableProjects.map((project, index) => (
                <div key={index} className="p-2 border rounded-lg text-xs">
                  <div className="font-medium truncate" title={project.title}>
                    {project.title}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {project.serviceId}
                    </Badge>
                    <span className="text-gray-500">{project.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Import Results */}
      {importResults && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Import Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {importResults.success.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-green-600 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Successfully Imported ({importResults.success.length})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {importResults.success.map((title, index) => (
                    <div key={index} className="text-xs p-2 bg-green-50 rounded border truncate" title={title}>
                      {title}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {importResults.failures.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-red-600 flex items-center gap-2">
                  <XCircle className="h-4 w-4" />
                  Failed Imports ({importResults.failures.length})
                </h4>
                <div className="space-y-1">
                  {importResults.failures.map((failure, index) => (
                    <div key={index} className="text-xs p-2 bg-red-50 rounded border">
                      <div className="font-medium truncate" title={failure.title}>{failure.title}</div>
                      <div className="text-red-600 mt-1">{failure.error}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PortfolioImportPanel;